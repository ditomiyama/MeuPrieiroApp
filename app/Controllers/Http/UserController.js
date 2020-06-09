'use strict'

const User = use('App/Models/User')

class UserController {

    async index () {
        const properties = User.all();
      
        return properties
    }

    async show ({ params }) {
        const user = await User.findOrFail(params.id)
      
        return user
    }

    async store ({ request, response }){
        const data = request.only(User.fillable);
    
        const user = await User.create(data);
        
        return user;
    }

    async update({ params, request, response }) {
        const user = await User.findOrFail(params.id);
        const data = request.only(User.fillable);
        
        user.merge(data);
        await user.save();
        
        return user
    }

    async destroy ({ params, request, response}) {
        const user = await User.findOrFail(params.id)
      
        await user.delete()
      }
}

module.exports = UserController