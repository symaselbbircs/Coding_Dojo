

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
  }
def names():
    for student in students:
        print "{} {}".format(student["first_name"],student["last_name"])


def name_details():
    for person_type in users:
        count = 1
        print person_type
        for person in users[person_type]:
            name = person['first_name'] + " " + person['last_name']
            namelength = len(name) - 1 #Cuts out the 1 whitespace
            print "{} - {} - {}".format(count, name, namelength)
            count += 1
names()
print ""
name_details()
