import { Button } from './Button';
import { GenreResponseProps } from '../App';

interface SideBarProps{
  genres: GenreResponseProps[];
  selectedGenreId : number;
  handleClickButton : (genre : number ) => void;
}



export function SideBar( {genres,selectedGenreId,handleClickButton} : SideBarProps) {

    return(

  <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {genres.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClickButton(genre.id)}
        selected={selectedGenreId === genre.id}
      />
    ))}
  </div>

</nav>
    )
}