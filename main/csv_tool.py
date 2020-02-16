import os
import time
import pandas as pd
from main.models import AppUser
import chardet


def csv_to_database(file_path):
    global df
    try:
        with open(file_path, 'rb') as e:#modi
            ans = chardet.detect(e.read(10000))
            ans = ans.get('encoding')
        print("encoding:", ans, '\nend_detect')
        enc = 'utf-8' if (ans == "utf-8") else 'gbk'
        reader = pd.read_csv(os.path.normpath(file_path), encoding=enc, sep=',', iterator=True, dtype={'id': str, })
        i = 0
        while True:
            try:
                start2 = time.clock()
                df = reader.get_chunk(1000000)
                i = i + 1
                end2 = time.clock()
                # 每次循环结束时间
                print('csv读取 : {} 秒: completed {} rows'.format(end2 - start2, i * 1000000))
            except StopIteration:
                print("Iteration is stopped.")
            # 循环结束退出
            break
        print('读取完毕,写入数据库hhhh')
        start3 = time.clock()
        query_list = []
        for i, r in df.iterrows():
            #user_cur.save() #每次save都访问一次数据库,效率太低
            if not AppUser.objects.filter(id=r['id']).exists():
                query_list.append(AppUser(**(r.to_dict())))
        AppUser.objects.bulk_create(query_list)
        end3 = time.clock()
        print('数据库写入 : {} 秒'.format(end3 - start3, ))
        return "200"
    except Exception as e:
        return str(e)
