-- CreateTable
CREATE TABLE "Group" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "group_orientation" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Teachers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "group_name" TEXT NOT NULL,
    "group_Id" INTEGER NOT NULL,
    CONSTRAINT "Teachers_group_Id_fkey" FOREIGN KEY ("group_Id") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Students" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "group_name" TEXT NOT NULL,
    "teacher_Id" INTEGER NOT NULL,
    "group_Id" INTEGER,
    CONSTRAINT "Students_teacher_Id_fkey" FOREIGN KEY ("teacher_Id") REFERENCES "Teachers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Students_group_Id_fkey" FOREIGN KEY ("group_Id") REFERENCES "Group" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
