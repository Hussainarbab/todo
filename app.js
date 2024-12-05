let editingItem = null;

        function add() {
            let input = document.getElementById("inpt");
            let inputValue = input.value.trim();

            if (!inputValue) return;

            if (editingItem) {
               
                editingItem.firstChild.textContent = inputValue;

                
                editingItem.querySelector(".edit-btn").textContent = "Edit";
                editingItem.querySelector(".edit-btn").onclick = function () {
                    editItem(this);
                };

                
                editingItem = null;
            } else {
          
                document.getElementById("show").innerHTML += `
                    <div>
                        ${inputValue} 
                        <button onclick="this.parentElement.remove()">Delete</button>
                        <button class="edit-btn" onclick="editItem(this)">Edit</button>
                    </div>
                `;
            }

            input.value = ""; 
        }

        function editItem(button) {
            let input = document.getElementById("inpt");
            let item = button.parentElement;

            input.value = item.firstChild.textContent.trim();

            
            button.textContent = "Update";
            button.onclick = function () {
                add();
            };

           
            editingItem = item;
        }