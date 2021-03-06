export interface Servico {
    id: number;
    nrOrdem: number;
    defeito: string;
    servicosExecutados: string;
    pecasSubstituidas: string;
    observacao: string;
    dtAtendimento: Date;
    valorServico: number;
    qtdDiasGarantia: number;
    equipamentoId: number;
    garantia: boolean;
}
