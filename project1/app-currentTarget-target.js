//currentTarget - always refers to the element to which the event handler hahas been attached to
//target - identifies the elementon which the event occured

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
	btn.addEventListener('click', function(e){
//		console.log(e.currentTarget);
//		e.currentTarget.style.color = 'green';
		console.log(e);
		e.target.style.color = 'green';
	});
});
