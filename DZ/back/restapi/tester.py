import pymysql

connection = pymysql.connect(
    host="localhost",
    user="dbuser",
    password="123",
    database="Printing3d",
    cursorclass=pymysql.cursors.DictCursor
)

cur = connection.cursor()
sql = "SELECT max(price) FROM printing3d.printing3d_model3d;"
cur.execute(sql)
rows = cur.fetchall()

for row in rows:
    hu = row["max(price)"]
    print(f'price = {row["max(price)"]}')
connection.close()
print (hu)
