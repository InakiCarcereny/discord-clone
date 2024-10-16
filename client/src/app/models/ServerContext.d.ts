export interface ServerContextTypes {
  servers: Server[];
  error: string[];
  createServer: (data: Server) => void;
  deleteServer: (data: Server) => void;
}

export interface Server {
  _id: string;
  tittle: string;
  logo: unknown;
}
