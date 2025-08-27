
export interface Pokemon {
    /** A list of abilities this Pokémon could potentially have. */
    abilities: PokemonAbility[];
    /** The base experience gained for defeating this Pokémon. */
    base_experience: number;
    /** A set of cries used to depict this Pokémon in the game. A visual representation of the various cries can be found at <a href='https://github.com/PokeAPI/cries#cries'>PokeAPI/cries</a> */
    cries: Cries;
    /** A list of forms this Pokémon can take on. */
    forms: unknown[];
    /** A list of game indices relevent to Pokémon item by generation. */
    game_indices: unknown[];
    /** The height of this Pokémon in decimetres. */
    height: number;
    /** A list of items this Pokémon may be holding when encountered. */
    held_items: HeldItem[];
    /** The identifier for this resource. */
    id: number;
    /** Set for exactly one Pokémon used as the default for each species. */
    is_default: boolean;
    /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
    location_area_encounters: string;
    /** A list of moves along with learn methods and level details pertaining to specific version groups. */
    moves: MoveElement[];
    /** The name for this resource. */
    name: string;
    /** Order for sorting. Almost national order, except families are grouped together. */
    order: number;
    past_abilities: PastAbility[];
    /** A list of details showing types this pokémon had in previous generations */
    past_types: PastType[];
    /** The species this Pokémon belongs to. */
    species: unknown;
    /** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at <a href='https://github.com/PokeAPI/sprites#sprites'>PokeAPI/sprites</a> */
    sprites: PokemonSprites;
    /** A list of base stat values for this Pokémon. */
    stats: StatElement[];
    /** A list of details showing types this Pokémon has. */
    types: PokemonType[];
    /** The weight of this Pokémon in hectograms. */
    weight: number;
    [property: string]: unknown;
}

export interface PokemonAbility {
    /** The ability the Pokémon may have. */
    ability: unknown;
    /** Whether or not this is a hidden ability. */
    is_hidden: boolean;
    /** The slot this ability occupies in this Pokémon species. */
    slot: number;
    [property: string]: unknown;
}

export interface Cries {
    latest: string;
    legacy: null | string;
    [property: string]: unknown;
}

export interface HeldItem {
    item: unknown;
    version_details: RarityVersion[];
    [property: string]: unknown;
}

export interface MoveElement {
    move: unknown;
    version_group_details: VersionGroupDetail[];
    [property: string]: unknown;
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: unknown;
    version_group: unknown;
    [property: string]: unknown;
}

export interface PastAbility {
    abilities: PastAbilityAbility[];
    generation: unknown;
    [property: string]: unknown;
}

export interface PastAbilityAbility {
    ability: unknown;
    is_hidden: boolean;
    slot: number;
    [property: string]: unknown;
}

export interface PastType {
    generation: unknown;
    types: PastTypeType[];
    [property: string]: unknown;
}

export interface PastTypeType {
    slot: number;
    type: unknown;
    [property: string]: unknown;
}

export interface PokemonSprites {
    /** The default depiction of this Pokémon from the back in battle. */
    back_default: null | string;
    /** The female depiction of this Pokémon from the back in battle. */
    back_female: null | string;
    /** The shiny depiction of this Pokémon from the back in battle. */
    back_shiny: null | string;
    /** The shiny female depiction of this Pokémon from the back in battle. */
    back_shiny_female: null | string;
    /** The default depiction of this Pokémon from the front in battle. */
    front_default: null | string;
    /** The female depiction of this Pokémon from the front in battle. */
    front_female: null | string;
    /** The shiny depiction of this Pokémon from the front in battle. */
    front_shiny: null | string;
    /** The shiny female depiction of this Pokémon from the front in battle. */
    front_shiny_female: null | string;
    other: unknown;
    versions: unknown;
    [property: string]: unknown;
}

export interface StatElement {
    base_stat: number;
    effort: number;
    stat: {
        name: string
        url: string
    };
    [property: string]: unknown;
}

export interface PokemonType {
    /** The order the Pokémon's types are listed in. */
    slot: number;
    /** The type the referenced Pokémon has. */
    type: {
        name: string
        url: string
    };
    [property: string]: unknown;
}

export interface RarityVersion {
    rarity: number;
    version: unknown;
    [property: string]: unknown;
}
