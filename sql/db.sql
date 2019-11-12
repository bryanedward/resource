CREATE TABLE IF NOT EXISTS users(
    idUser INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nameUser text NOT NULL CHECK (nameUser <> ''),
    emailUser text NOT NULL,
    roleUser text NOT NULL,
    passUser text NOT NULL,
    photoUser text NOT NULL

);

CREATE TABLE IF NOT EXISTS publications(
    idPublication INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    namePublication text NOT NULL CHECK (namePublication <> ''),
    descriptPublication text,
    levelSubject INTEGER NOT NULL,
    userId INTEGER REFERENCES users(idUser)
);


CREATE TABLE IF NOT EXISTS messages(
  idMessage INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  messageUser text NOT NULL CHECK (messageUser <> ''),
  userId INTEGER REFERENCES users(idUser),
  publicationId INTEGER REFERENCES publications(idPublication)
);







INSERT INTO users(nameUser,emailUser,passUser, roleUser)
VALUES ('Bryan','edwardbrian96@gmail.com','3893259','students');

INSERT INTO users(nameUser,emailUser,passUser)
VALUES ('Ricardo','ricardo@gmail.com',389325229);

INSERT INTO projects(name,priority, description, deliverydate)
VALUES ('make a app mobile', 1, 'using express', '2019-05-13');

INSERT INTO projects(name,priority, description, deliverydate)
VALUES ('make a table for pg', 1, 'using express', '2019-05-14');

-- INSERT TASKS DATA
INSERT INTO publications(namePublication,descriptPublication,userId)
VALUES ('jwtoken','para que sirve',1);

INSERT INTO tasks (name, done, projectId)
VALUES ('create app mobile', true, 1);

INSERT INTO tasks (name, done, projectId)
VALUES ('practice java', true, 2);

INSERT INTO tasks (name, done, projectId)
VALUES ('connect database', false, 1);
