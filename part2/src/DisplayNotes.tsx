import React, {Component, FunctionComponent} from 'react'

type Note = {
  id: number,
  content: string,
  date: string,
  important: boolean,
} 

type NoteProps = {
  notes: Array<Note>
}

const DisplayNotes: FunctionComponent<NoteProps> = ({notes}) =>
  <div>
  <h1>Notes</h1>
  <ul>{notes.map((note: Note, ind: any) =>
    <li key={ind}>{note.content}</li>
  )}</ul>
  </div>

export default DisplayNotes;