# Relationships

SQL relationships are used to link records in different tables through the use of foreign keys. There are four main types of relationships:

## One-to-One

A one-to-one relationship exists when one row in a table may be linked with only one row in another table and vice versa. 

Example: A person has one passport, and a passport belongs to one person.

```sql
CREATE TABLE Person (
    ID int,
    Name varchar(255),
    PassportID int,
    PRIMARY KEY (ID),
    FOREIGN KEY (PassportID) REFERENCES Passport(ID)
);

CREATE TABLE Passport (
    ID int,
    IssueDate date,
    PRIMARY KEY (ID)
);
```

## One-to-Many
A one-to-many relationship exists when a single row in table A may be linked with many rows in table B, but a row in table B is linked to only one row in table A.

Example: A mother can have many children, but each child has only one mother.
;
```sql
CREATE TABLE Mother (
    ID int,
    Name varchar(255),
    PRIMARY KEY (ID)
);

CREATE TABLE Child (
    ID int,
    Name varchar(255),
    MotherID int,
    PRIMARY KEY (ID),
    FOREIGN KEY (MotherID) REFERENCES Mother(ID)
);
```

## Many-to-Many
A many-to-many relationship exists when multiple rows in table A may be linked with multiple rows in table B.

Example: A student can enroll in many courses, and a course can have many students.

This is usually implemented with a junction table.

```sql
CREATE TABLE Student (
    ID int,
    Name varchar(255),
    PRIMARY KEY (ID)
);

CREATE TABLE Course (
    ID int,
    Name varchar(255),
    PRIMARY KEY (ID)
);

CREATE TABLE Enrollment (
    StudentID int,
    CourseID int,
    FOREIGN KEY (StudentID) REFERENCES Student(ID),
    FOREIGN KEY (CourseID) REFERENCES Course(ID),
    PRIMARY KEY (StudentID, CourseID)
);
```

## One-to-Many Through
A one-to-many through relationship exists when a one-to-many relationship passes through a third table.

Example: A writer writes many books, a book can have many genres, and a genre can be associated with many books.

```sql
CREATE TABLE Writer (
    ID int,
    Name varchar(255),
    PRIMARY KEY (ID)
);

CREATE TABLE Book (
    ID int,
    Name varchar(255),
    WriterID int,
    PRIMARY KEY (ID),
    FOREIGN KEY (WriterID) REFERENCES Writer(ID)
);

CREATE TABLE Genre (
    ID int,
    Name varchar(255),
    PRIMARY KEY (ID)
);

CREATE TABLE BookGenre (
    BookID int,
    GenreID int,
    FOREIGN KEY (BookID) REFERENCES Book(ID),
    FOREIGN KEY (GenreID) REFERENCES Genre(ID),
    PRIMARY KEY (BookID, GenreID)
);
```