import events from '@hooks/events';

function change() {
		if(events.course == "Mathematics") {
			let mat = document.getElementsByClassName('rbc-event')
			mat.style.backgroundColor = 'red';
		} else if (events.course == "History") {
			let his = document.getElementsByClassName('rbc-event');
			his.style.backgroundColor = 'rgb(5, 126, 35)';
		} else if (events.course == "Communication") {
			let com = document.getElementsByClassName('rbc-event');
			com.style.backgroundColor = 'rgb(255, 145,0)';
		} else if (events.course == "Artistic expression") {
			let art = document.getElementsByClassName('rbc-event');
			art.style.backgroundColor = "rgb(207, 0, 226)";
		} else if (events.course == "Computing") {
			let comp = document.getElementsByClassName('rbc-event');
			comp.style.backgroundColor = 'blue';
		}
	}

export default change;
