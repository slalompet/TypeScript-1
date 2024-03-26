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

