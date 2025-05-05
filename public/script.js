document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    const prioritySelect = document.getElementById('prioritySelect');
    const categorySelect = document.getElementById('categorySelect');
    const dueDate = document.getElementById('dueDate');
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');
    const sortSelect = document.getElementById('sortSelect');
    const clearCompletedButton = document.getElementById('clearCompleted');
    const totalTasksSpan = document.getElementById('totalTasks');
    const completedTasksSpan = document.getElementById('completedTasks');
    const completionRateSpan = document.getElementById('completionRate');

    let tasks = [];

    // Add new task
    addTaskButton.addEventListener('click', addNewTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addNewTask();
    });

    // Search functionality
    searchInput.addEventListener('input', filterTasks);

    // Filter and sort functionality
    filterSelect.addEventListener('change', filterTasks);
    sortSelect.addEventListener('change', () => filterTasks());

    // Clear completed tasks
    clearCompletedButton.addEventListener('click', clearCompletedTasks);

    function addNewTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const task = {
                id: Date.now(),
                text: taskText,
                priority: prioritySelect.value,
                category: categorySelect.value,
                dueDate: dueDate.value,
                completed: false,
                createdAt: new Date()
            };
            
            tasks.push(task);
            renderTasks();
            taskInput.value = '';
            updateStats();
        }
    }

    function filterTasks() {
        const searchTerm = searchInput.value.toLowerCase();
        const categoryFilter = filterSelect.value;
        
        let filtered = tasks;
        
        if (searchTerm) {
            filtered = filtered.filter(task => 
                task.text.toLowerCase().includes(searchTerm)
            );
        }
        
        if (categoryFilter !== 'all') {
            filtered = filtered.filter(task => 
                task.category === categoryFilter
            );
        }
        
        renderFilteredTasks(filtered);
        return filtered;
    }

    function renderFilteredTasks(filteredTasks) {
        taskList.innerHTML = '';
        const sortedTasks = sortTasks(filteredTasks);

        sortedTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
            
            const taskInfo = document.createElement('div');
            taskInfo.className = 'task-info';
            
            const title = document.createElement('span');
            title.className = 'task-title';
            title.textContent = task.text;
            
            const meta = document.createElement('div');
            meta.className = 'task-meta';
            
            const category = document.createElement('span');
            category.className = `task-category category-${task.category}`;
            category.textContent = task.category;
            
            const dueDateSpan = document.createElement('span');
            dueDateSpan.className = 'due-date';
            if (task.dueDate) {
                const due = new Date(task.dueDate);
                const today = new Date();
                dueDateSpan.textContent = `Due: ${due.toLocaleDateString()}`;
                if (due < today && !task.completed) {
                    dueDateSpan.classList.add('overdue');
                }
            }
            
            meta.appendChild(category);
            meta.appendChild(dueDateSpan);
            
            taskInfo.appendChild(title);
            taskInfo.appendChild(meta);
            
            const actions = document.createElement('div');
            actions.className = 'task-actions';
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            
            li.appendChild(taskInfo);
            li.appendChild(actions);
            actions.appendChild(deleteButton);
            taskList.appendChild(li);

            taskInfo.addEventListener('click', () => {
                task.completed = !task.completed;
                li.classList.toggle('completed');
                updateStats();
            });

            deleteButton.addEventListener('click', () => {
                tasks = tasks.filter(t => t.id !== task.id);
                renderTasks();
                updateStats();
            });
        });
    }

    function renderTasks() {
        renderFilteredTasks(tasks);
    }

    function sortTasks(tasksToSort = tasks) {
        const sortBy = sortSelect.value;
        
        return [...tasksToSort].sort((a, b) => {
            switch (sortBy) {
                case 'priority':
                    const priorityOrder = { high: 0, medium: 1, low: 2 };
                    return priorityOrder[a.priority] - priorityOrder[b.priority];
                case 'date':
                    return new Date(a.dueDate) - new Date(b.dueDate);
                case 'category':
                    return a.category.localeCompare(b.category);
                default:
                    return 0;
            }
        });
    }

    function clearCompletedTasks() {
        tasks = tasks.filter(task => !task.completed);
        renderTasks();
        updateStats();
    }

    function updateStats() {
        const total = tasks.length;
        const completed = tasks.filter(task => task.completed).length;
        const rate = total > 0 ? Math.round((completed / total) * 100) : 0;
        
        totalTasksSpan.textContent = total;
        completedTasksSpan.textContent = completed;
        completionRateSpan.textContent = `${rate}%`;
    }
}); 