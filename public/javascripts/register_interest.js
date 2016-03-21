jQuery(function(){
  var callback
  $('.register-interest-form').submit(function(){
    name  = $('#register-name').val()
    email = $('#register-email').val()
    if($.trim(name) != '' && $.trim(email) != '')
    {
      url = ["https://ti.to/rails-camp-scotland/autumn-2016/interested_users/subscribe.json?&interested_user[email]=", email , "&interested_user[name]=", name, "&callback=?"].join('')
      $.getJSON(url, null, function(data){})
      width = $('.register-interest-form').width()
      height = $('.register-interest-form').height()
      $('.register-interest-form')
      .promise().done(function(){
        $('.register-interest-form').html(['<p class="thanks">', '<strong>', 'Thanks', '</strong>', ' ', name.split(' ')[0], '!', '</p>'].join(''))
      })
    }
    else
    {
      $('.register-interest-form').effect("shake")
    }
  return false;
  })
})
