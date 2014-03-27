if (Meteor.isClient) {
  Session.setDefault('numberValue', 3);

  Template.hello.greeting = function () {
    return "These are from the <a href=https://github.com/meteor/meteor/wiki/Using-Blaze#wiki-new-pattern-for-defining-custom-block-helpers>examples</a>";
  };

  Template.hello.release = function() {
    return Meteor.release;
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
