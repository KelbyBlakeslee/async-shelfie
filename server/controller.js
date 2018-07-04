module.exports = {
    getShelfProducts: function (req, res) {
        const db = req.app.get('db')
        let { shelfId } = req.params
        db.view_bins([shelfId])
            .then(response => {
                res.status(200).send(response)
            })
    },
    getBinId: function (req, res) {
        const db = req.app.get('db')
        let { binId, shelfId } = req.params
        db.get_bin([shelfId, binId])
            .then(response => {
                res.status(200).send(response)
            })
    },
    editBin: function (req, res) {
        const db = req.app.get('db')
        let { price, name } = req.body
        let { id } = req.params
        db.edit_bin([name, price, id])
            .then(response => {
                res.status(200).send(response)
            })
    },
    deleteBin: function (req, res) {
        const db = req.app.get('db')
        let { id } = req.params
        db.delete_bin([id])
            .then(response => {
                res.status(200).send(response)
            })
    },
    createBin: function (req, res) {
        const db = req.app.get('db')
        let { price, name } = req.body
        let { id } = req.params
        db.create_bin([name, price, id])
            .then(response => {
                res.status(200).send(response)
            })
    }
}