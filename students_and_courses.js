function Student(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.enrolled_courses = [];
}

Student.prototype.name = function() {
  return `${this.first_name} ${this.last_name}`;
}

Student.prototype.courses = function() {
  return this.enrolled_courses;
}

Student.prototype.enroll = function(course) {
  if (!this.enrolled_courses.includes(course) && !this.enrolled_courses.some((otherCourse) => otherCourse.conflictsWith(course))) {
    this.enrolled_courses.push(course);
    course.addStudent(this);
  }
  return this.enrolled_courses;
}



Student.prototype.courseLoad = function() {
  let counter = {};
  this.enrolled_courses.forEach((course) => {
    if (counter[course.department]) {
      counter[course.department] += course.credit_hours;
    } else {
      counter[course.department] = course.credit_hours;
    }
  })
  return counter;
}

function Course(course_name, department, credit_hours, dayOfWeek, timeBlock) {
  this.course_name = course_name;
  this.department = department;
  this.credit_hours = credit_hours;
  this.enrolled_students = [];
  this.dayOfWeek = dayOfWeek;
  this.timeBlock = timeBlock;
}

Course.prototype.students = function() {
  return this.enrolled_students;
}

Course.prototype.addStudent = function(student) {
  this.enrolled_students.push(student);
}

Course.prototype.conflictsWith = function(otherCourse) {
  if (this.dayOfWeek === otherCourse.dayOfWeek && this.timeBlock === otherCourse.timeBlock) {
    return true;
  } else {
    return false;
  }
}


let javascript = new Course('Javascript101', 'CS', 5000, "Mon", 3);
let ruby = new Course('Ruby101', 'CS', 4000, "Tue", 7);
let dolphinTraining = new Course('Sea World', 'Science', 9, "Mon", 3);
let matt = new Student("Matt", "Velker");
let melissa = new Student("Melissa", "Lau");

matt.enroll(dolphinTraining);
// console.log(matt.courseLoad());
melissa.enroll(javascript);
melissa.enroll(dolphinTraining);
matt.enroll(ruby)
console.log(melissa.enrolled_courses);
// console.log(dolphinTraining.enrolled_students);
