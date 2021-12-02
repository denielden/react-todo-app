import logo from './logo.svg';
import './App.css';
import React from 'react';

	// TODO
	// length task name
	// close modify menu

function InputTask(props) {
	return(
		<input
			id="addTask"
			onKeyPress={props.addTask}
			placeholder="+ Aggiungi un'attività"
		/>
	);
}
function CheckDone(props) {
	return(
		<span
			onClick={props.toggle}
			className={props.valDone ? "done" : "markdone"}
		/>
	);
}
function BulletMenu(props) {
	const changeDisplay = e => {
		e.preventDefault();
		let menu = e.target.childNodes[0];
		if(menu === undefined){ return }
		if(!menu.nodeValue){
			menu.classList.toggle('d-block')
		}
	}
	const showModInput = e => {
		let input = e.target.parentNode.parentNode.childNodes[1];
		let subMenu = e.target.parentNode;
		input.classList.toggle('d-block');
		subMenu.classList.toggle('d-block');
	}
	return(
		<span className="bullMenu" onClick={changeDisplay}>
			<div className="subMenu">
				<p onClick={showModInput}>Modifica</p>
				<p onClick={props.delete}><span className="delete" /> Elimina</p>
			</div>
			<ModalModifyTask modify={props.modify} val={props.val} />
		</span>
	);
}
function ModalModifyTask(props){
	return(
		<input
			className="modTask"
			onKeyPress={props.modify}
			placeholder={"✎ "+props.val}
		/>
	);
}


class ToDoApp extends React.Component {
	constructor(props){
		super(props);
		this.state = JSON.parse(window.localStorage.getItem('stateTasks')) || { tasks: [] };
		this.addTask = this.addTask.bind(this);
		this.toggleDone = this.toggleDone.bind(this);
		this.modifyTask = this.modifyTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	componentDidUpdate() {
		window.localStorage.setItem('stateTasks', JSON.stringify(this.state));
	}

	sortTasks(arr){
		return arr.sort((a, b) => a.done - b.done);
	}
	addTask(e){
		if(e.key === 'Enter' && e.target.value.trim().length < 3) {
			alert('Inserisci minimo 3 caratteri.')
		}
		if(e.key === 'Enter' && e.target.value.trim().length >= 3) {
			let newTask = {
				name: e.target.value.trim(),
				id: Date.now(),
				done: false
			};
			this.setState(prevState => (
				{ tasks: this.sortTasks([newTask].concat(prevState.tasks)) }
			));
			e.target.value = '';
		}
	}
	toggleDone(e){		
		const idTask = parseInt(e.target.parentNode.id);	
		const updateTasks = [...this.state.tasks].map(ele => 
			ele.id === idTask ? Object.assign(ele, { done: !ele.done }) : ele
		);
		
		const markedDone = updateTasks.filter(ele => ele.id === idTask)[0].done;
		const logo = document.querySelector('img.logo');
		if(markedDone) {
			logo.style.animation = 'none';
			void logo.offsetWidth;
			logo.style.animation = 'logo-spin 1600ms ease-out 1';
		}

		this.sortTasks(updateTasks);
		this.setState({ tasks: updateTasks });	
	}
	modifyTask(e){
		const idTask = parseInt(e.target.parentNode.parentNode.id);	
		if(e.key === 'Enter' && e.target.value.trim().length < 3) {
			alert('Devi inserire minimo 3 caratteri.')
		}
		if(e.key === 'Enter' && e.target.value.trim().length >= 3) {
			const updateTasks = [...this.state.tasks].map(ele => 
				ele.id === idTask ? Object.assign(ele, { name: e.target.value }) : ele
			);
			this.setState({ tasks: updateTasks });
			e.target.classList.remove('d-block');
			e.target.value = '';
		}
	}
	deleteTask(e){
		const idTask = parseInt(e.target.parentNode.parentNode.parentNode.id);		
		this.setState(prevState => (
			{ tasks: prevState.tasks.filter(ele => ele.id !== idTask) }
		));
	}
	
	render(){
		// console.log(this.state);
		return(
			<section>
				<label htmlFor="addTask">Cose da fare oggi?</label>
				<InputTask addTask={this.addTask} />
				<ul>
					{this.state.tasks.map(task => 
						<li key={task.id} id={task.id} className={task.done ? "done" : undefined}>
							<CheckDone toggle={this.toggleDone} valDone={task.done} />
							<span className="nameTask">{task.name}</span>
							<BulletMenu modify={this.modifyTask} val={task.name} delete={this.deleteTask} />
						</li>
					)}
				</ul>
			</section>
		);
	}
}


function App() {
	return(
		<div>
			<header className="header">
				<img src={logo} className="logo" alt="React logo" />
				<h1>React ToDoApp!</h1>
				<ToDoApp />
				<small className="copy">&copy; developed by <a href="/">denie/den</a> 2021</small>
			</header>
		</div>
	);
}

export default App;