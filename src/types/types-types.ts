// Base resource structure
interface NamedAPIResource {
  name: string;
  url: string;
}

// Damage relations
interface TypeRelations {
  double_damage_from: NamedAPIResource[];
  double_damage_to: NamedAPIResource[];
  half_damage_from: NamedAPIResource[];
  half_damage_to: NamedAPIResource[];
  no_damage_from: NamedAPIResource[];
  no_damage_to: NamedAPIResource[];
}

// Game index info
interface GenerationGameIndex {
  game_index: number;
  generation: NamedAPIResource;
}

// Localized names
interface TypeName {
  language: NamedAPIResource;
  name: string;
}

// Pokémon slot relation
interface TypePokemon {
  pokemon: NamedAPIResource;
  slot: number;
}

// Sprites per generation
interface TypeSprites {
  [generation: string]: {
    [game: string]: {
      name_icon: string;
    };
  };
}

// Full Type response
export interface TypeType {
  damage_relations: TypeRelations;
  game_indices: GenerationGameIndex[];
  generation: NamedAPIResource;
  id: number;
  move_damage_class: NamedAPIResource;
  moves: NamedAPIResource[];
  name: string;
  names: TypeName[];
  past_damage_relations: any[]; // eslint-disable-line
  pokemon: TypePokemon[];
  sprites: TypeSprites;
}
