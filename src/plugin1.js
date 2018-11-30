import * as tapable from 'tapable'

export default class MyPlugin{
    constructor(){ 
        this.hooks = { 
            newMessage : new tapable.SyncHook(['message'])
        }
    }
    apply(core){
        core.hooks.newMessage.tap("MyPluginNewMessage", newMessage => console.log(newMessage))
    }

}

