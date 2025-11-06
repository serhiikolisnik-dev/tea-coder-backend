import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  // OneToMany,
} from 'typeorm';

import { Genre } from '../types/movie.type';
import { ReviewEntity } from '../../review/entities/review.entity';
import { ActorEntity } from '../../actors/entities/actor.entities';

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 120 })
  title: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({ type: 'date', nullable: true, name: 'release_date' })
  releaseDate: string;

  @Column({ type: 'decimal', precision: 3, scale: 1, default: 0.0 })
  rating: number;

  @Column({ type: 'boolean', default: false, name: 'is_available' })
  isAvailable: boolean;

  @Column({ type: 'enum', enum: Genre, default: Genre.ACTION })
  genre: Genre;

  @OneToMany(() => ReviewEntity, (review) => review.movie)
  reviews: ReviewEntity[];

  @ManyToMany(() => ActorEntity, (actors) => actors.movies)
  @JoinTable({
    name: 'movie_actors',
    joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' },
  })
  actors: ActorEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
