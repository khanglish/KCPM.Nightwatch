module.exports = {
    'Check Footer present after the app loaded'(client) {
        client
          .url('http://todomvc.com/examples/react/#/')
          .pause(1000)
          .expect.element('.info').to.be.present;
        client.end();
    },
    'Check Input value equal to typed value'(client){
        client
            .url('http://todomvc.com/examples/react/#/')
            .waitForElementPresent('input.new-todo')
            .setValue('input.new-todo',['Dummy Todo Item', client.Keys.ENTER])
            .expect.element('.todo-list li label')
            .to.have.text.that.equals('Dummy Todo Item');
        client.end();
    },
    'Check "Todo List" present after add 1 "Todo Item"' (client){
        client
            .url('http://todomvc.com/examples/react/#/')
            .pause(1000)
            .setValue('input.new-todo',['Todo Item 1', client.Keys.ENTER])
            .expect.element('.todo-list').to.be.present;
        client.end();
    },
    'Check the number of list items is equal to the number of typed items'(client){
        client
            .url('http://todomvc.com/examples/react/#/')
            .waitForElementPresent('input.new-todo')
            .setValue('input.new-todo',['Todo Item 1', client.Keys.ENTER])
            .setValue('input.new-todo',['Todo Item 2', client.Keys.ENTER])
            .setValue('input.new-todo',['Todo Item 3', client.Keys.ENTER])
            .expect.element('body > section > div > footer > span > strong')
            .to.have.text.that.equals('3');
        client.end();
    }

};