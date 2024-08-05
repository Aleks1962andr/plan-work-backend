const PlanesModel = require('./PlanesModel');

module.exports.getPlan = async(req, res) => {
    const myPlan = await PlanesModel.find();
    res.send(myPlan);
}
module.exports.savePlan = async (req, res) => {
    const { object, name_object,length_route, diametr_route, amount_work, percentage, start_work, finish_work, executor } = req.body;
    PlanesModel.create({object, name_object,length_route, diametr_route, amount_work, percentage, start_work, finish_work, executor})
    .then( (data) => { console.log('Planes added')
    res.send(data)
})
}
module.exports.deletePlan = async (req, res) => {
    const { _id } = req.body;
    PlanesModel.findByIdAndDelete(_id)
    .then( () => res.send('Planes deleted'))
}
module.exports.editPlan = async (req, res) => {
    const { object, name_object,length_route, diametr_route, amount_work, percentage, start_work, finish_work, executor, _id } = req.body;
    PlanesModel.findByIdAndUpdate(_id, {object, name_object,length_route, diametr_route, amount_work, percentage, start_work, finish_work, executor})
    .then( () => res.send('Edited Planes'))
}

