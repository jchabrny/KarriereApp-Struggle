export interface IApplication {
    jobName: string
    jobId: string
    date?: string
    status: number // no reply= 1 rejection=2 invitation=3
}