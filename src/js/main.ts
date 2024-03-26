// html elements

const f = document.getElementById('course-info') as HTMLFormElement;
const l = document.getElementById('course-list') as HTMLUListElement;

//interfaces

interface Course {
    code: string;
    name: string;
    progression: string;
    syllabus: string;
}

// function save course info 
function saveCourse(courses: Course[]): void {
    localStorage.setItem('courses', JSON.stringify(courses));
    courses.forEach(course => console.log('saved course:', course.code, course.name, course.progression, course.syllabus));
}

// function load course info
function loadCourses(): Course[] {
    const courseJSON = localStorage.getItem('courses');
    return courseJSON ? JSON.parse(courseJSON) : [];
}



// const courses: Course[] = [
//     { code: '1234', name: 'Web', progression: 'A', syllabus: 'svt.se' }
// ];

// const loadedCourses = loadCourses();
// console.log('Loaded courses:', loadedCourses);


