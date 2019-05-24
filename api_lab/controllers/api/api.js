const Movie = require('../../models/movie');


module.exports = {
    index,
    show,
    create, 
    update,
    remove
};

function index(req, res) {
    Movie.find({})
    .then(movies => {
        res.status(200).json(movies)
    })
    .catch(err => {
        res.status(400).json({'error': 'Something went wrong'});
    });
}

function show(req, res) {
    Movie.findById(req.params.id)
    .populate('cast').exec((err, movie) => {
        if(err) return res.status(400).json({'error': 'Something went wrong'});
        res.status(200).json(movie)
    });

}


async function create(req, res) {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie)
    } catch (error) {
        res.status(400).json({'error': 'Something went wrong'})
    }
}

async function update(req, res) {
    try {
        const updatedMovie = await Movie
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedMovie)
    } catch (error) {
        res.status(500).json({'error': 'Something went wrong'})
    }
}

async function remove(req, res) {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json({'message': 'Movie deleted successfully'});
    } catch (error) {
        res.status(500).json({'error': 'Something went wrong'})
    }
}