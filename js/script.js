var option = {frequency: 5, limit: 10};

var poller = new massrel.Poller(option, function(bands){
	
	if($('.container').find('.loading')) {
		$('.loading').remove();
	}
	$('.bandList').remove();
	$.each(bands, function(index, band) {
		$('.container').append('<div class="bandList"><span class="bandName">' + band.name + '</span><span class="mentions white">mentions</span><span class="mentions">' + band.count + '</span></div>');
	});
});

poller.start();