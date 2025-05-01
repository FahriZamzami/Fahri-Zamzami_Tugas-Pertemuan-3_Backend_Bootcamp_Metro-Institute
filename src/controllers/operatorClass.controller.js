const {OperatorClass} = require('../models')

const listClass =  async (req, res) => {
    try{
        const operatorClass = await OperatorClass.findAll()
        res.status(201).json({
            "message": "Berhasil mendapatkan daftar class",
            "data": operatorClass
        })
    }

    catch (error){
        res.status(500).json({
            "message": "Gagal mendapatkan daftar class",
            "error": error
        })
    
    console.log(error)
    }
}

const addClass = async (req,res) => {
    try {
        const {operator_class} = req.body
        const operatorClass = await OperatorClass.create({
            operator_class: operator_class,
        })
        res.status(201).json({
            "message": "Berhasil menambahkan class",
            "data": operatorClass
        })
    }

    catch (error){
        res.status(500).json({
            "message": "Gagal menambahkan class",
            "error": error
        })
    
    console.log(error)
    }
}

const deleteClass = async (req,res) => {
    try {
        const operatorClass = await OperatorClass.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({
            "message": "Berhasil menghapus class",
            "data": operatorClass
        })
    }

    catch (error){
        res.status(500).json({
            "message": "Gagal menghapus class",
            "error": error
        })

    console.log(error)
    }
}

const updateClass = async (req,res) => {
    try {
        const operatorClass = await OperatorClass.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({
            "message": "Berhasil mengubah class",
            "data": operatorClass
        })
    }

    catch (error){
        res.status(500).json({
            "message": "Gagal mengubah class",
            "error": error
        })

    console.log(error)
    }
}

const detailClass = async (req,res) => {
    try {
        const {id} = req.params
        const operatorClass = await OperatorClass.findByPk(id)

        res.status(201).json({
            "message": "Berhasil mendapatkan detail class",
            "data": operatorClass
        })
    }

    catch (error){
        res.status(500).json({
            "message": "Gagal mendapatkan detail class",
            "error": error
        })

    console.log(error)
    }
}

module.exports = {
    listClass,
    addClass,
    deleteClass,
    updateClass,
    detailClass
}