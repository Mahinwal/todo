window.addEventListener('load', () => {
    const task_edit = document.getElementsByClassName("edit");
    for(const key in task_edit){
        task_edit[key].addEventListener('click', (e) => {
            if (task_edit[key].innerText.toLowerCase() == "edit") {
				task_edit[key].innerText = "Save";
                const button = document.createElement('button');
                button.innerHTML = task_edit[key].innerHTML;
                button.className = task_edit[key].className;
                task_edit[key].parentNode.replaceChild(button, task_edit[key]);
                button.type = "submit";
                // Update the button's click event to submit the form
                // button.addEventListener('click', (event) => {
                //     event.preventDefault();
                //     input.form.submit();
                // });
                task_edit[key].parentNode.parentElement.firstElementChild.firstElementChild.removeAttribute("readonly")
                task_edit[key].parentNode.parentElement.firstElementChild.firstElementChild.focus()
			} else {
				task_edit[key].innerText = "Edit";
				task_edit[key].setAttribute("readonly", "readonly");
			}
        })
    }
    
	// 	task_delete_el.addEventListener('click', (e) => {
	// 		list_el.removeChild(task_el);
	// 	});
	// });
});