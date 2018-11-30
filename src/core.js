import * as tapable from 'tapable'

export default class Core { 
    constructor (){ 
        this._plugins = []
        this.hooks = {
            newMessage : new tapable.SyncHook(['message']),
            gotMessage : new tapable.SyncHook(),

        }
        
    }
    setSpeed(newSpeed) { 
        this.hooks.acc.call(newSpeed)
    }
    brake (){
        this.hooks.brake.call(); 
    }
    newMessage(messgae){ 
        this.hooks.newMessage.call(messgae)
    }
    register(plugins){ 
        for (let plugin of plugins){
            this.initPlugin(plugin)
        }
    }
    initPlugin(Plugin){
        let plugin = new Plugin()
        this._plugins.push(plugin)
        this.applyToPlugin(plugin)
    }
    applyToPlugin (plugin){ 
        plugin.apply(this)
    }
}