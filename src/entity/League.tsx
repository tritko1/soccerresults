import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class League {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    league: number;

    @Column()
    leagueName: string;
}