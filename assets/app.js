if (!window.jQuery) { document.querySelectorAll('.status').forEach(el => el.textContent = 'jQuery could not load. Connect to the internet and reload.'); }
else $(document).ready(function () {
  console.log('jQuery is ready!');
  $('#ready-status').text('✓ jQuery is ready! Open the console to verify.');
  let itemNumber = 3, night = false, docs = false;
  const resetBox = selector => $(selector).stop(true, false).css({left:0,top:0,width:64,height:64,opacity:1});
  const distance = selector => Math.max(0, $(selector).parent().width() - 130);
  $('[data-action]').on('click', function () {
    const action = $(this).data('action');
    if (action === 'selectors') { $('#selector-title').text('Selected by ID'); $('.selector-copy').html('Text with <strong>HTML</strong>, selected by class.'); $('#tag-demo span').css({color:'#267358',fontWeight:'700',fontSize:'20px'}); }
    if (action === 'selectors-reset') { $('#selector-title').text('A heading selected by ID'); $('.selector-copy').text('A paragraph selected by class'); $('#tag-demo span').text('A span selected by tag').removeAttr('style'); }
    if (['hide','show','toggle'].includes(action)) $('#visibility-text').stop(true,true)[action](300);
    if (['fadeIn','fadeOut','fadeToggle'].includes(action)) $('#fade-image').stop(true,true)[action](500);
    if (['slideUp','slideDown','slideToggle'].includes(action)) $('#slide-panel').stop(true,true)[action](400);
    if (action === 'append') $('#item-list').append($('<li>').text('Practice item ' + itemNumber++));
    if (action === 'prepend') $('#item-list').prepend($('<li>').text('Practice item ' + itemNumber++));
    if (action === 'remove') $('#item-list li').last().remove();
    if (['append','prepend','remove'].includes(action)) $('#list-status').text($('#item-list li').length + ' items in the list');
    if (action === 'image-src') { night = !night; $('#attribute-image').attr({src:night?'assets/night.svg':'assets/day.svg',alt:night?'Illustrated mountain landscape at night':'Illustrated mountain landscape in daylight'}); }
    if (action === 'link-href') { docs = !docs; const url = docs?'https://api.jquery.com/':'https://jquery.com/'; $('#dynamic-link').attr('href',url).text(docs?'Visit jQuery API documentation':'Visit jQuery'); $('#link-status').text('Current href: '+url); }
    if (action === 'basic') { resetBox('#basic-box'); $('#basic-box').animate({left:distance('#basic-box'),top:24,width:112,height:112},900); }
    if (action === 'basic-reset') resetBox('#basic-box');
    if (action === 'sequence') { resetBox('#sequence-box'); $('#sequence-box').animate({left:distance('#sequence-box')},600).animate({top:150},500).animate({width:36,height:36},400).animate({left:0,top:0,width:64,height:64},700); }
    if (action === 'sequence-reset') resetBox('#sequence-box');
    if (action === 'combined') { resetBox('#combined-box'); $('#combined-box').animate({left:distance('#combined-box'),top:24,width:112,height:112,opacity:0.4},900); }
    if (action === 'combined-reset') resetBox('#combined-box');
  });
  $('#profile-form').on('submit',function(event){event.preventDefault();});
  $('#name, #email').on('input',function(){ $('#live-name').text($('#name').val() || '—'); $('#live-email').text($('#email').val() || '—'); });
  $('.accordion-panel').prop('hidden',false).hide();
  $('.accordion-trigger').on('click',function(){
    const trigger=$(this), panel=$('#'+trigger.attr('aria-controls')), open=trigger.attr('aria-expanded')==='true';
    $('.accordion-trigger').not(trigger).attr('aria-expanded','false').find('span').text('+');
    $('.accordion-panel').not(panel).stop(true,true).slideUp(300);
    trigger.attr('aria-expanded',String(!open)).find('span').text(open?'+':'−');
    panel.stop(true,true).slideToggle(300);
  });
});
