
document.addEventListener('DOMContentLoaded', function(){

  document.querySelector("#addTask").onsubmit = function(){

    const li = document.createElement('li');

    let task_name = document.querySelector('#taskName').value;
    let task_priority = document.querySelector('#selectPriority').value;


  function statusOption() {
        if (document.querySelector("#completed").checked == true) {
            return "completed";
        }
        else {
            return "pending";
        }
    }

	let task_status = statusOption();

     let tasks_list = [];
    tasks_list.toString = function() {
        array.forEach(function(element) {
            return `element.innerHTML\n`
        });
    }



    let addTask_html = `
                        <div>
                        <span style="color:blue"> Task: </span>${task_name}  <br>
                        <span style="color:blue"> Priority Level:</span> ${task_priority} <br>
                       <span style="color:blue"> Status:</span> ${task_status}
                        </div>
                        <button class="completed_task"> Completed </button>
                        <button class="remove"> Remove Task </button>
                        `;

      li.innerHTML = addTask_html
      tasks_list.push(li)


        document.querySelector("#task_list").append(li);
        document.querySelector("#taskName").value = '';
        document.querySelector("#selectPriority").value = 'Select Priority';
        document.getElementById("completed").checked = false;
		    document.getElementById("pending").checked = false;

        return false;

  }

    document.addEventListener('click', function(event){
      element = event.target;

      if(element.className === 'completed_task'){
      element.parentElement.style.setProperty("text-decoration", "line-through");
      }


      if(element.className === 'remove') {
        element.parentElement.remove();
        element.tasks_list.remove();
      }


    })
});

