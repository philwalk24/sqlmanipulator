INSERT INTO department(names)
VALUES ("accounting"),
       ("marketing"),
       ("human resources");
INSERT INTO roles(id,title,salary,department_id)
VALUES (1,"accountant",50000,1),
       (2, "senior accountant",75000,1),
       (3, "advertiser",45000,2),
       (4, "analyst",55000,2),
       (5, "office manager",85000,3);

INSERT INTO employee(id,first_name,last_name,role_id,manager_id)
VALUES (1,"hank","schrader",1,1),
       (2,"walter","white",1,2),
       (3,"gus","fring",5,3),
       (4,"skylar","grey",2,4),
       (5,"mike","ehrmantraut",3,5),
       (6, "tuco","salamanca",4,6),
       (7, "ted","beneke",4,7);
    