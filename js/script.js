$(".js-range-slider").ionRangeSlider({
	skin: "round",
	min: 0,
	max: 1000,
	step: 10,
	grid: true
})
// Calculator
$('#price, #area, #box1, #box2').on('change', function(){
	sum();
})

function sum() {
	let price = $('#price').val();
	let area = $('#area').val();
	let box1 = $('#box1');
	let box2 = $('#box2');

	// 1й способ

	// if (box1.prop('checked')) {
	// 	box1.val(2);
	// } else {
	// 	box1.val(0);
	// }
	// if (box2.prop('checked')) {
	// 	box2.val(3);
	// } else {
	// 	box2.val(0);
	// }

	// let sum = (price - box1.val() - box2.val()) * area;
	// console.log(sum);

	// 2й спсоб

	// let total = 0;
	// $('#logistic input:checked').each(function() {
	// 	total += parseInt($(this).val(), 0);
	// })
	// let sum = (price - total) * area;
	// console.log(sum);
		
	// 3й спсоб
	



	
	let sum = (price - total) * area;
	console.log(sum);
}
