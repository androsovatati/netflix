import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviesSort'
})
export class MoviesSortPipe implements PipeTransform {

  transform(movies: any[], sortType: string, ascending: boolean): any {
    if (!movies) return;

    if (sortType === 'rating') {
      movies = movies.sort((first: any, second: any) => {
        return (first.show.rating.average - second.show.rating.average);
      });

    } else if (sortType === 'release') {
      movies = movies.sort((first: any, second: any) => {
        let firstDate = new Date(first.show.premiered),
            secondDate = new Date(second.show.premiered);

        return (firstDate.getTime() - secondDate.getTime());
      });
    }

    if (ascending) {
      movies = movies.reverse();
    }

    return movies;
  }

}