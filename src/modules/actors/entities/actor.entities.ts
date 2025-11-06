import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinColumn,
} from 'typeorm';
import { MovieEntity } from '../../movie/entities/movie.entity';

@Entity({ name: 'actors' })
export class ActorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @ManyToMany(() => MovieEntity, (movie) => movie.actors)
  @JoinColumn({ name: 'movie_id' })
  movies: MovieEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
