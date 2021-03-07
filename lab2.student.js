//a definition of a student
class Student{
    //Student ID
    id;
    //Student name 
    name;

    //creates a new instance (object) of type  student
    constructor(id, name){
        //set the id and name of the object instance
        this.id=id;
        this.name=name;
    }
}
var students=[
    new Student ('001', 'Kevin'),
    new Student ('002', 'Lisa'),
    new Student ('003', 'Arturo')];

    function printStudents(){
        //build text to display
        var text='';
        //iterate over the students
        for (var student of students){
            text=text +student.id+': '+student.name+'<br>';
        }

        //get the main element
        var main =document.getElementById('main');
        //set the innerHTML to the text
        main.innerHTML=text;
    }