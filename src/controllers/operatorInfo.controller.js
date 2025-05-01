const {OperatorInfo} = require('../models')

const listOperator =  async (req, res) => {
    try{
        const operatorInfo = await OperatorInfo.findAll()
        res.status(201).json({
            "message": "Berhasil mendapatkan daftar operator",
            "data": operatorInfo
        })
    }

    catch (error){
        res.status(500).json({
            "message": "Gagal mendapatkan daftar operator",
            "error": error
        })
    
    console.log(error)
    }
}

const addOperator = async (req,res) => {
    try {
        const {id_class, operatorName, rarityStar, operatorArcheType, operatorCost} = req.body
        const operatorInfo = await OperatorInfo.create({
            id_class: id_class,
            operatorName: operatorName,
            rarityStar: rarityStar,
            operatorArcheType: operatorArcheType,
            operatorCost: operatorCost
        })
        res.status(201).json({
            "message": "Berhasil menambahkan operator",
            "data": operatorInfo
        })
    }

    catch (error){
        res.status(500).json({
            "message": "Gagal menambahkan operator",
            "error": error
        })
    
    console.log(error)
    }
}

const deleteOperator = async (req,res) => {
    try {
        const operatorInfo = await OperatorInfo.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({
            "message": "Berhasil menghapus operator",
            "data": operatorInfo
        })
    }

    catch (error){
        res.status(500).json({
            "message": "Gagal menghapus operator",
            "error": error
        })

    console.log(error)
    }
}

const updateOperator = async (req,res) => {
    try {
        const operatorInfo = await OperatorInfo.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(201).json({
            "message": "Berhasil mengubah operator",
            "data": operatorInfo
        })
    }

    catch (error){
        res.status(500).json({
            "message": "Gagal mengubah opreator",
            "error": error
        })

    console.log(error)
    }
}

const detailOperator = async (req,res) => {
    try {
        const {id} = req.params
        const operatorInfo = await OperatorInfo.findByPk(id)

        res.status(201).json({
            "message": "Berhasil mendapatkan detail operator",
            "data": operatorInfo
        })
    }

    catch (error){
        res.status(500).json({
            "message": "Gagal mendapatkan detail operator",
            "error": error
        })

    console.log(error)
    }
}

module.exports = {
    listOperator,
    addOperator,
    deleteOperator,
    updateOperator,
    detailOperator
}