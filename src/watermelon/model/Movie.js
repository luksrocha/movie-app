import { Model } from "@nozbe/watermelondb";
import {field} from '@nozbe/watermelondb/decorators';

export default class Movie extends Model {
  static table = "movies"
  
  @field('title') title;
  @field('poster_path') posterPath;
  @field('runtime') runtime;
  @field('vote_average') voteAverage;

  
}