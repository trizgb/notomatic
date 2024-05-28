import { NotesList } from 'components/NotesList'

const Home = () => {
  const notes = [
    {
      id: '1',
      title: 'Title',
      subtitle: '10/10/10',
      content:
        'Condemor ahorarr apetecan mamaar fistro apetecan. De la pradera mamaar al ataquerl amatomaa.',
    },
    {
      id: '2',
      title: 'Title',
      subtitle: '10/10/10',
      content:
        'Caballo blanco caballo negroorl hasta luego Lucas qué dise usteer torpedo quietooor a wan ahorarr. La caidita amatomaa ese hombree te voy a borrar el cerito caballo blanco caballo negroorl qué dise usteer.',
    },
    {
      id: '3',
      title: 'Title',
      subtitle: '10/10/10',
      content:
        'Condemor ahorarr apetecan mamaar fistro apetecan. De la pradera mamaar al ataquerl amatomaa. Caballo blanco caballo negroorl hasta luego Lucas qué dise usteer torpedo quietooor a wan ahorarr. La caidita amatomaa ese hombree te voy a borrar el cerito caballo blanco caballo negroorl qué dise usteer.',
    },
  ]

  return (
    <div>
      <NotesList notes={notes} />
    </div>
  )
}

export default Home
