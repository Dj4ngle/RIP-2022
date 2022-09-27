import pymysql

connection = pymysql.connect(
    host="localhost",
    user="dbuser",
    password="123",
    database="Printing3d",
    cursorclass=pymysql.cursors.DictCursor
)

with connection.cursor() as cursor:
    insert_table_query = "INSERT INTO `Models` (name, description) VALUES ('615 ММ ЭЙФЕЛЕВА БАШНЯ', 'Нам определенно нужна Эйфелева башня');"
    cursor.execute(insert_table_query)
    connection.commit()
    cursor.close()
connection.close()
