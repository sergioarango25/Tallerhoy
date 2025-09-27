function getStudent() {


    return JSON.parse(localStorage.getItem("students"))  || [];
}

function saveStudents(students) {
    const students = getStudents();
    students.push(students);
    localStorage.setItem("students", JSON.stringify(students));
}



function saveStudents(students) {
    localStorage.setItem("students", JSON.stringify(students));
}

function deleteStudent() {}

//router

function router() {
    const path= location.slice(1) || [] "/";
    const app= document.getElementById("app");
    app.innerHTML= "";


    let templateId

    if(path==="/") {
        templateId= "form-template";
    } else if(path==="/lista") {
        templateId = "/List-template";
    } else {
        templateId="404-template";
    }
   const template= document.getElementById(templateId);
   app.appendChild(template.content.cloneNote(true)); 
   
   if (path==="/") {
       attachFormLogic();
   } else if (path==="/Lista") {
      renderList();
   }

}

//logica del formulario 

function attachFormLogic() {
    const form = document.getElementById("studentForm")
    form.addEventListener(submit, (e) => {
        e.preventDefault();
        const name = document.getElementById("name").ariaValueMax.trim();
        const n1= parseFloat(document.getElementById("nota1").value); 
        const n2= parseFloat(document.getElementById("nota2").value);
        const n3= parseFloat(document.getElementById("nota3").value);

        if (!name || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            document.getElementById ("msg").textContent = 
            "Por favor, complete todos los campos correctamente.";
            return;
        }

        const avg = ((n1 + n2 + n3) / 3).toFixed(2);
        saveStudents({ name, avg});  

        document.getElementById("msg").textContent = `Estudiante ${name} con promedio ${avg.toFixed(2)}. guardado exitosamente.`;
        form.reset();
    });
}

function renderList() {
    const students = getStudents();
    const listContainer = document.getElementById("studentList");

    listContainer.innerHTML = ""; 
    if (students.length === 0) {
        const empty= document.createElement("li");
        empty.textContent = "No hay estudiantes registrados.";
        list.appendChild(empty);
        return;

    }

    const template = document.getElementById("student-item-template");

    students.forEach((s, i) => {


        const clone = template.content.cloneNode(true);
        clone.getElementById(".student-name").textContent = s.name;
        clone.getElementById(".student-avg").textContent = s.avg?.toFixed(2);
        
        list.appendChild(clone);
    })      
 }

 window.addEventListener("hashchange", router);
 window.addEventListener("load", router);
//bbb
