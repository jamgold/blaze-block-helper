if (Meteor.isClient) {
  Session.setDefault('numberValue', 3);

  Template.hello.greeting = function () {
    return "These are from the <a href=https://www.google.com/url?q=https%3A%2F%2Fgithub.com%2Fmeteor%2Fmeteor%2Fwiki%2FUsing-Blaze%23wiki-new-pattern-for-defining-custom-block-helpers&sa=D&sntz=1&usg=AFQjCNHrtRb3JCShPheqM4GxyudnAgrE4w>examples</a>";
  };

  Template.hello.selectOptions = function() {
    return ['red', 'green', 'blue'];
  };

  Template.example1.numberValue = function() {
    return Session.get('numberValue');
  };

  Template.example1.events({
    'change input': function (event, template) {
      event.preventDefault();
      Session.set('numberValue', parseInt(event.target.value));
    }
  });

  Template.example2.isChecked = function() {
    return Session.get('maybeDiv') ? "checked" : null;
  };

  Template.example2.cbo = function() {
    return "{{";
  };

  Template.example2.cbc = function() {
    return "}}";
  };

  Template.example2.events({
    'click input[type=checkbox]': function(event, template) {
      // event.preventDefault();
      // console.log('checkbox');
      Session.set("maybeDiv", event.target.checked);
    }
  })

  Template.ifEven.isEven = function (value) {
    console.log('Block Helper isEven');
    // console.log(arguments);
    return (value % 2) === 0;
  }

  Handlebars.registerHelper('maybeDiv', function () {
    $('div.feedback ol').append('<li>Handlebars Helper maybeDiv</li>');
    var o = this.valueOf();
    // console.log(o);
    if (o['checked'])
      return Template._maybeDiv_wrapInDiv;
    else
      return Template._maybeDiv_noop;
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
