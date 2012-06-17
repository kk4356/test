
function commonData() {
      $('#title-text').Watermark('Add title here');
      $('#desc-text').Watermark('Add Description here');
}

function getValues() {
	var data = {};
	 data.taskId = $('#task-Id').val();
	 data.taskTitle = $('#title-text').val();
	 data.taskDesc = $('#desc-text').val();
	 data.taskStatus = $('#task-status').val();
	 if(!data.taskId || !data.taskTitle || !data.taskStatus) {
		alert('fields are mandatory');
	 }
	 else{
		alert(JSON.stringify(data));
	 }
}

function clearAll() {
	$('#task-Id').val('');
	$('#title-text').val('');
	$('#desc-text').val('');
}