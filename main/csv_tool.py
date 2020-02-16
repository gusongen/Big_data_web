import os
import time
import pandas as pd
from main.models import AppUser

def csv_to_database(file_path):
    global df
    try:
        reader = pd.read_csv(os.path.normpath(file_path), encoding="gbk", sep=',', iterator=True, )
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
        print('读取完毕,写入数据库')
        start3 = time.clock()
        query_list=[]
        for i, r in df.iterrows():
            # AppUser(**(r.to_dict())).save() #每次save都访问一次数据库,效率太低
            query_list.append(AppUser(**(r.to_dict())))
        AppUser.objects.bulk_create(query_list)
        end3 = time.clock()
        print('数据库写入 : {} 秒'.format(end3 - start3,))    
        return "200"
    except Exception as e:
        return str(e)
