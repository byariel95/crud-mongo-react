const Note = require('../models/note.model');
const noteMethods  ={};


noteMethods.getNotes = async (req,res)=>{
    const notes = await Note.find();
    res.json(notes);
};

noteMethods.createNote = async (req, res) =>{
    const {title, content,author,date  } = req.body;
    const newNote = new Note({
        title,
        content,
        author,
        date
    });

    await newNote.save();
    res.json('Note is added successfully ');
};

noteMethods.getNote = async (req,res)=>{
    const note = await Note.findById(req.params.id);
    res.json(note);
};

noteMethods.updateNote = async (req,res)=>{
    
    const {title, content,author  } = req.body;
    await Note.findByIdAndUpdate(req.params.id,{
        title,
        content,
        author,
    })

    res.json('note updated');
};

noteMethods.deleteNote = async (req,res)=>{
     await Note.findByIdAndDelete(req.params.id);
    res.json('Note deleted');
};


module.exports = noteMethods;
