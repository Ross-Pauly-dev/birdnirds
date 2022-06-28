import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Coordinate {
  readonly latitude?: string | null;
  readonly longitude?: string | null;
  constructor(init: ModelInit<Coordinate>);
}

type CaptureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Capture {
  readonly id: string;
  readonly name?: string | null;
  readonly date?: string | null;
  readonly bird?: string | null;
  readonly user?: string | null;
  readonly location?: Coordinate | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Capture, CaptureMetaData>);
  static copyOf(source: Capture, mutator: (draft: MutableModel<Capture, CaptureMetaData>) => MutableModel<Capture, CaptureMetaData> | void): Capture;
}