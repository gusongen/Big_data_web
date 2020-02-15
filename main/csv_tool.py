import os
import time
import pandas as pd
from main.models import AppUser


def csv_to_database(file_path):
    global df
    try:
        reader = pd.read_csv(os.path.normpath(file_path), encoding="utf_8_sig", sep=',', iterator=True, )
        i = 0
        while True:
            try:
                start2 = time.clock()
                df = reader.get_chunk(1000000)
                i = i + 1
                end2 = time.clock()
                # 每次循环结束时间
                print('{} 秒: completed {} rows'.format(end2 - start2, i * 1000000))
            except StopIteration:
                print("Iteration is stopped.")
            # 循环结束退出
            break

        for i, r in df.iterrows():
            AppUser(**(r.to_dict())).save()
        return "200"
    except Exception as e:
        return str(e)
