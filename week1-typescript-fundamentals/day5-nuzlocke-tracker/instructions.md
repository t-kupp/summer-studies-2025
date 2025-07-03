# Day 5 Project Briefing: Nuzlocke Tracker

## Context

This is Day 5 of a 6-week TypeScript to GSAP learning schedule. The student completed Day 4 by building a todo app with proper error handling, custom hooks, and type guards. They're comfortable with basic TypeScript but want to practice more complex patterns before moving to Week 2.

## Student Background

- Frontend developer student, ~1 year experience
- Prefers pseudocode over full code when learning
- Wants brutal honesty, minimal hints
- Interests: Coding, Pokemon Nuzlockes, Archipelago.gg randomizers
- Has existing Next.js + TypeScript setup from Day 3-4

## Day 5 Goal: Nuzlocke Tracker

Build a Pokemon Nuzlocke run tracker that demonstrates:

### Core TypeScript Learning Targets

1. **Complex interfaces with nested data**
2. **Union types for game mechanics**
3. **Custom hooks with business logic validation**
4. **Type guards for data validation**
5. **Local storage with proper error handling**

### Feature Requirements

```typescript
// Core interfaces to implement
interface Pokemon {
  id: string;
  name: string;
  nickname?: string;
  level: number;
  location: string;
  status: 'alive' | 'fainted' | 'boxed';
  types: PokemonType[];
  caughtAt: Date;
}

interface NuzlockeRun {
  id: string;
  gameName: string;
  startDate: Date;
  currentTeam: Pokemon[];
  casualties: Pokemon[];
  boxedPokemon: Pokemon[];
  encountersLog: EncounterLog[];
  rules: NuzlockeRules;
}
```

### Technical Requirements

- Custom hook: `useNuzlockeRun()` for run management
- Custom hook: `usePokemonTeam()` for team validation (max 6, no duplicates)
- Type guards for validating saved data
- Proper error handling for localStorage operations
- Union types for status, game versions, Pokemon types

### Validation Rules to Implement

- Team size limit (6 Pokemon max)
- No duplicate Pokemon per route/location
- Nickname requirements (if enabled in rules)
- Level tracking and validation

### Scope Limitations

- Keep it simple - this is a learning project, not production
- Focus on TypeScript patterns over UI polish
- Don't implement every Nuzlocke rule variant
- Basic CRUD operations: add Pokemon, update status, manage team

## Student Learning Style

- Prefers to figure things out with minimal hints
- Wants pseudocode structure, then implements details
- Will ask specific questions when stuck
- Values separation of concerns and proper typing over shortcuts

## Previous Work

Successfully completed Day 4 todo app with:

- Proper error handling with try/catch
- Type guards (`isTodo`, `isTodoArray`)
- Custom hook extraction (`useTodos`)
- localStorage integration with error recovery

Ready for more complex TypeScript patterns and data modeling.
